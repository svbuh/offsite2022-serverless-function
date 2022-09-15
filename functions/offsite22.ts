import { HandlerEvent } from '@netlify/functions';

function schedulePlan(timeslot: string): string {
    switch (timeslot) {
        case 'thu_3pm':
            return `Welcome! It's time to check-in`;

        case 'thu_9pm':
            return `Drinks & Live music @Havanabar`;

        case 'fri_5:30pm':
            return `Team photo!`;

        case 'sat_7:30am':
            return `Breakfast @SeaPoint`;

        // this is not reachable due to TS checks
        default:
            throw new Error('this should never happen');
    }
}

export const handler = async (event: HandlerEvent) => {
    try {
        const timeslot = event?.queryStringParameters?.schedule || 'thu_3pm';

        return {
            statusCode: 200,
            body: JSON.stringify({ message: schedulePlan(timeslot) }),
        };
    } catch (error: any) {
        return { statusCode: 500, body: error.toString() };
    }
};
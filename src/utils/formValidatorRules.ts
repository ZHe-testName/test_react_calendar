import moment, { Moment } from 'moment';
//object 4 adjusting form validator rules 
const rules = {
    required: (message: string) => ({
        required: true,
        message,
    }),

    isDateAfter: (message: string) => ({
        validator(_: any, value: Moment) {
            if (value.isSameOrAfter(moment())){
                return Promise.resolve();
            }

            return Promise.reject(new Error(message));
        },
    }),
};

export default rules;
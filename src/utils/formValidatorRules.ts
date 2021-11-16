//object 4 adjusting form validator rules 
const rules = {
    required: (message: string) => ({
        required: true,
        message,
    }),
};

export default rules;
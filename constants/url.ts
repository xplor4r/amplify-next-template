const isProduction = process.env.NODE_ENV === 'production';

const domain = 'ddg8iicsr72an.amplifyapp.com/';
const local = 'localhost:3000';
const home = isProduction ? domain : local;


export const url = {
	serverApi: `${isProduction ? 'https://' : 'http://'}${home}`,
};
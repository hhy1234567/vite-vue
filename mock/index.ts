import { MockMethod } from 'vite-plugin-mock';
import article from './modules/article'




let interfaceArr: Array<any> = [];
interfaceArr = interfaceArr.concat(article);



export default interfaceArr as MockMethod[];
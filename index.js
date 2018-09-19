import { scheduler } from './other/scheduler';

const logger = () => console.log('hi');

console.log('before scheduling');
scheduler(logger, 5 * 1000);
console.log('scheduled');

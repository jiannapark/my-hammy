/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as Hamster} from './hamster'
export {default as Food} from './food'
export {default as FoodForm} from './food-form'
export {default as Environment} from './environment'
export {default as Tracker} from './tracker'
export {default as TrackerForm} from './tracker-form'
export {default as Diary} from './diary'
export {default as DiaryForm} from './diary-form'
export {default as Dashboard} from './dashboard'
export {default as WeightGraph} from './weight-graph'

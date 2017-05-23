import moment from 'moment';

let Misc = {};

Misc.getBackgroundImage = () => {
    let time = moment().format('hh:mm A').toString();
    time = moment(time,'hh:mm A');
    if(time.isBetween(moment('06:00 AM','hh:mm A'),moment('09:00 AM','hh:mm A'))) {
        return 'morning';
    } else if(time.isBetween(moment('09:00 AM','hh:mm A'),moment('12:00 PM','hh:mm A'))) {
        return 'latemorning';
    } else if(time.isBetween(moment('12:00 PM','hh:mm A'),moment('03:00 PM','hh:mm A'))) {
        return 'afternoon';
    } else if(time.isBetween(moment('03:00 PM','hh:mm A'),moment('05:00 PM','hh:mm A'))) {
        return 'lateafternoon';
    } else if(time.isBetween(moment('05:00 PM','hh:mm A'),moment('07:00 PM','hh:mm A'))) {
        return 'evening';
    } else if(time.isBetween(moment('07:00 PM','hh:mm A'),moment('09:00 PM','hh:mm A'))) {
        return 'latevening';
    } else if(time.isBetween(moment('09:00 PM','hh:mm A'),moment('11:59 PM','hh:mm A'))) {
        return 'night';
    } else if(time.isBetween(moment('12:00 AM','hh:mm A'),moment('06:00 AM','hh:mm A'))) {
        return 'latenight';
    }
}

module.exports = Misc;

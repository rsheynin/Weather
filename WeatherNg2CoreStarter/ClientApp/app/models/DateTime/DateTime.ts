export class DateTime {
    private days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    private shortDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    private months: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    public date: Date;
    constructor(datetimeString: string) {
        this.date = new Date(datetimeString);
    }

    public getMonthName() {
        return this.months[this.date.getMonth()];
    }

    public getDayName() {
        return this.days[this.date.getDay()];
    }

    public getShortDayName() {
        return this.shortDays[this.date.getDay()];
    }
}

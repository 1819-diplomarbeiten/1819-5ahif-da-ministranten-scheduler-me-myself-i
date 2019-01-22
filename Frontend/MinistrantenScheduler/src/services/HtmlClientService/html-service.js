import {User} from "../../components/Entities/User/user";
import {Participant} from "../../components/Entities/Participant/participant";
import {Appointment} from "../../components/Entities/Appointment/appointment";
import {Day} from "../../components/Entities/Day/day";


export class HtmlService{

    static getAllParticipant() {
        return [
            new Participant(1,"Herbert","Franz","Ministrant",1),
            new Participant(2,"Max","Mustermann","Ministrant",1),
            new Participant(3,"Lisa","Hermann","Ministrant",2),
            new Participant(4,"Franz","Buschmann","Ministrant",2),
            new Participant(5,"Patrick","Mistlberger","Ministrant",3)
        ]
    }

    static getAllUser() {
        return [
            new User(1,"auinger23","hallo123","halsdnfön@gmail.com",9348753,98745,true,false,[new Participant(1,"Herbert","Franz","Ministrant",1),
                new Participant(2,"Max","Mustermann","Ministrant",1)]),
            new User(2,"hans213","hallo456","asdfasdf@gmail.com",7898465132,132465789,false,true,[new Participant(3,"Lisa","Hermann","Ministrant",2),
                new Participant(4,"Franz","Buschmann","Ministrant",2)]),
            new User(3,"seb3412","asdfghjk","ölkjölkj@gmail.com",798465479,1345613,true,true,[new Participant(5,"Patrick","Mistlberger","Ministrant",3)]),
        ];
    }

    static getUserById(its) {
        return new User(1,"auinger23","hallo123","halsdnfön@gmail.com",9348753,98745,true,false,[new Participant(1,"Herbert","Franz","Ministrant",1),
            new Participant(2,"Max","Mustermann","Ministrant",1)])
    }

    static getAllAppointments() {
        let time = new Date();
        return [
            new Appointment(1,time.setHours(11,30,0),7,2,1),
            new Appointment(2,time.setHours(10,30,0),5,5,2),
            new Appointment(3,time.setHours(12,30,0),9,6,3),
        ]
    }

    static getAllDays() {
        let time = new Date();
        return [
            new Day(1,this.stringToDate('18.04.2019',"dd.MM.yyyy","."),this.stringToDate('20.04.2019',"dd.MM.yyyy","."),this.stringToDate('30.04.2019',"dd.MM.yyyy","."),[new Appointment(1,time.setHours(11,30,0),7,2,1),new Appointment(2,time.setHours(14,30,0),4,2,1),new Appointment(3,time.setHours(21,30,0),9,0,1)]),
            new Day(2,this.stringToDate('18.05.2019',"dd.MM.yyyy","."),this.stringToDate('20.05.2019',"dd.MM.yyyy","."),this.stringToDate('30.05.2019',"dd.MM.yyyy","."),[new Appointment(1,time.setHours(11,30,0),7,2,2),new Appointment(2,time.setHours(14,30,0),4,2,2),new Appointment(3,time.setHours(21,30,0),9,0,2)])
        ];
    }

    static stringToDate(_date,_format,_delimiter)
    {
        var formatLowerCase=_format.toLowerCase();
        var formatItems=formatLowerCase.split(_delimiter);
        var dateItems=_date.split(_delimiter);
        var monthIndex=formatItems.indexOf("mm");
        var dayIndex=formatItems.indexOf("dd");
        var yearIndex=formatItems.indexOf("yyyy");
        var month=parseInt(dateItems[monthIndex]);
        month-=1;
        var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
        return formatedDate;
    }
}
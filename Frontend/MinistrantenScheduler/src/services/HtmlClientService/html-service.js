import {User} from "../../components/Entities/User/user";
import {Participant} from "../../components/Entities/Participant/participant";
import {Appointment} from "../../components/Entities/Appointment/appointment";
import {Day} from "../../components/Entities/Day/day";

var datas = [];
var prop = [];
var appoin = [];
export class HtmlService{

    static getAllParticipant() {
        /*datas =
            [
                {
                    participantId: 1,
                    lastName: "Herbert",
                    firstName: "Franz",
                    grad: "Ministrant",
                    userId: 1
                },
                {
                    participantId: 2,
                    firstName: "Max",
                    lastName: "Mustermann",
                    grad: "Ministrant",
                    userId:1
                },
                {
                    participantId: 3,
                    firstName: "Lisa",
                    lastName: "Hermann",
                    grad: "Ministrant",
                    userId: 2
                },
                {
                    participantId: 4,
                    firstName: "Franz",
                    lastName: "Buschmann",
                    grad: "Ministrant",
                    userId: 2
                },
                {
                    participantId: 5,
                    firstName: "Patrick",
                    lastName: "Mistlberger",
                    grad: "Ministrant",
                    userId: 3
                }
            ];
        return datas;*/
        return [
            new Participant(1,"Herbert","Franz","Ministrant",1),
            new Participant(2,"Max","Mustermann","Ministrant",1),
            new Participant(3,"Lisa","Hermann","Ministrant",2),
            new Participant(4,"Franz","Buschmann","Ministrant",2),
            new Participant(5,"Patrick","Mistlberger","Ministrant",3)
        ]
    }

    static getAllUser() {
        /*prop = [
            {
                userId: 1,
                userName: "auinger23",
                password: "hallo123",
                email: "halsdnfön@gmail.com",
                phoneNumber: 9348753,
                secPhoneNumber: 98745,
                whatsAppRe: true,
                emailRe: false,
                participants: [
                    {
                        participantId: 1,
                        lastName: "Herbert",
                        firstName: "Franz",
                        grad: "Ministrant",
                        userId: 1
                    },
                    {
                        participantId: 2,
                        firstName: "Max",
                        lastName: "Mustermann",
                        grad: "Ministrant",
                        userId:1
                    }

                ]
            },
            {
                userId: 2,
                userName: "hans213",
                password: "hallo456",
                email: "asdfasdf@gmail.com",
                phoneNumber: 7898465132,
                secPhoneNumber: 132465789,
                whatsAppRe: false,
                emailRe: true,
                participants: [
                    {
                        participantId: 3,
                        firstName: "Lisa",
                        lastName: "Hermann",
                        grad: "Ministrant",
                        userId: 2
                    },
                    {
                        participantId: 4,
                        firstName: "Franz",
                        lastName: "Buschmann",
                        grad: "Ministrant",
                        userId: 2
                    },
                    {
                        participantId: 6,
                        firstName: "Herbst",
                        lastName: "Summer",
                        grad: "Ministrant",
                        userId: 2
                    }
                ]
            },
            {
                userId: 3,
                userName: "seb3412",
                password: "asdfghjk",
                email: "ölkjölkj@gmail.com",
                phoneNumber: 798465479,
                secPhoneNumber: 1345613,
                whatsAppRe: true,
                emailRe: true,
                participants:[
                    {
                        participantId: 5,
                        firstName: "Patrick",
                        lastName: "Mistlberger",
                        grad: "Ministrant",
                        userId: 3
                    }
                ]
            }
        ];
        return prop;*/
        return [
            new User(1,"auinger23","hallo123","halsdnfön@gmail.com",9348753,98745,true,false,[new Participant(1,"Herbert","Franz","Ministrant",1),
                new Participant(2,"Max","Mustermann","Ministrant",1)]),
            new User(2,"hans213","hallo456","asdfasdf@gmail.com",7898465132,132465789,false,true,[new Participant(3,"Lisa","Hermann","Ministrant",2),
                new Participant(4,"Franz","Buschmann","Ministrant",2)]),
            new User(3,"seb3412","asdfghjk","ölkjölkj@gmail.com",798465479,1345613,true,true,[new Participant(5,"Patrick","Mistlberger","Ministrant",3)]),
        ];
    }

    static getUserById(its) {
        /*let ist = new User()
        ist = this.users.find(item => item.userId == its)*/

        /*return  [
            {
                userId: 1,
                userName: "auinger23",
                password: "hallo123",
                email: "halsdnfön@gmail.com",
                phoneNumber: 9348753,
                secPhoneNumber: 98745,
                whatsAppRe: true,
                emailRe: false,
                participants: [
                    {
                        participantId: 1,
                        lastName: "Herbert",
                        firstName: "Franz",
                        grad: "Ministrant",
                        userId: 1
                    },
                    {
                        participantId: 2,
                        firstName: "Max",
                        lastName: "Mustermann",
                        grad: "Ministrant",
                        userId:1
                    }

                ]
            }];*/
        return new User(1,"auinger23","hallo123","halsdnfön@gmail.com",9348753,98745,true,false,[new Participant(1,"Herbert","Franz","Ministrant",1),
            new Participant(2,"Max","Mustermann","Ministrant",1)])
    }

    static getAllAppointments() {
        /*return [
            {
                appointmentId: 1,
                time:'11:30',
                required_Mini: 7,
                required_Lec: 2,
                dayId: 1,
                participants:[]
            },
            {
                appointmentId: 2,
                time:'10:30',

                required_Mini: 5,
                required_Lec: 5,
                dayId: 2,
                participants:[]
            },
            {
                appointmentId: 3,
                time:'12:30',
                required_Mini: 9,
                required_Lec: 6,
                dayId: 3,
                participants:[]
            }
        ]*/
        let time = new Date();
        return [
            new Appointment(1,time.setHours(11,30,0),7,2,1),
            new Appointment(2,time.setHours(10,30,0),5,5,2),
            new Appointment(3,time.setHours(12,30,0),9,6,3),
        ]
    }

    static getAllDays() {
        /*return [
            {
                dayId:1,
                dayDate: '18.04.2019',
                available: '20.04.2019',
                deadline: '30.04.2019',
                appointments:[
                    {
                        appointmentId: 1,
                        time:'11:30',
                        required_Mini: 7,
                        required_Lec: 2,
                        dayId: 1,
                        participants:[]
                    },
                    {
                        appointmentId: 2,
                        time:'11:30',
                        required_Mini: 5,
                        required_Lec: 4,
                        dayId: 1,
                        participants:[]
                    },
                    {
                        appointmentId: 3,
                        time:'11:30',
                        required_Mini: 9,
                        required_Lec: 7,
                        dayId: 1,
                        participants:[]
                    }
                ]
            },
            {
                dayId:2,
                dayDate: '18.05.2019',
                available: '20.05.2019',
                deadline: '30.05.2019',
                appointments:[
                    {
                        appointmentId: 1,
                        time:'13:30',
                        required_Mini: 3,
                        required_Lec: 2,
                        dayId: 2,
                        participants:[]
                    },
                    {
                        appointmentId: 2,
                        time:'14:30',
                        required_Mini: 5,
                        required_Lec: 8,
                        dayId: 2,
                        participants:[]
                    },
                    {
                        appointmentId: 3,
                        time:'15:30',
                        required_Mini: 2,
                        required_Lec: 7,
                        dayId: 2,
                        participants:[]
                    }
                ]
            }
        ]*/
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
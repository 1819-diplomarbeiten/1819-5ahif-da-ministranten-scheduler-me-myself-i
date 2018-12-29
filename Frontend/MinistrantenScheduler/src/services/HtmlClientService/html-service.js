import {User} from "../../components/Entities/User/user";

var datas = [];
var prop = [];
export class HtmlService{

    static getAllParticipant() {
        datas =
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
        return datas;
    }

    static getAllUser() {
        prop = [
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
        return prop;
    }

    static getUserById(its) {
        /*let ist = new User()
        ist = this.users.find(item => item.userId == its)*/

        return  [
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
            }];
    }
}
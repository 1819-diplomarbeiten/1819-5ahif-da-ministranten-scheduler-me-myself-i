var datas = [];
export class HtmlService{

    static getAllParticipant() {
        datas =
            [
                {
                    participantId: 1,
                    lastName: "Herbert",
                    firstName: "Franz",
                    grad: "Ministrant"
                },
                {
                    participantId: 2,
                    firstName: "Max",
                    lastName: "Mustermann",
                    grad: "Ministrant"
                },
                {
                    participantId: 3,
                    firstName: "Lisa",
                    lastName: "Hermann",
                    grad: "Ministrant"
                },
                {
                    participantId: 4,
                    firstName: "Franz",
                    lastName: "Buschmann",
                    grad: "Ministrant"
                }
            ]
        return datas;
    }
}
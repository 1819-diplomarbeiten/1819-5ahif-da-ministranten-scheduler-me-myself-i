package at.htl.entities;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.LinkedList;
import java.util.List;

@Entity
@NamedQueries({
        @NamedQuery(name = "Appointment.getAll",query = "select v from Appointment v")
})
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int AppointmentId;

    private LocalTime time;

    private int required_Mini;

    private int required_Lec;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "dayId")
    private Day day;

    @ManyToMany(mappedBy = "appointments")
    private List<Participant> participants = new LinkedList<Participant>();




    public Appointment() {
    }

    public Appointment(LocalTime time, int required_Mini, int required_Lec, Day day) {
        this.time = time;
        this.required_Mini = required_Mini;
        this.required_Lec = required_Lec;
        this.day = day;
    }



    //Getter Setter
    public int getAppointmentId() {
        return AppointmentId;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public int getRequired_Mini() {
        return required_Mini;
    }

    public void setRequired_Mini(int required_Mini) {
        this.required_Mini = required_Mini;
    }

    public int getRequired_Lec() {
        return required_Lec;
    }

    public void setRequired_Lec(int required_Lec) {
        this.required_Lec = required_Lec;
    }

    public Day getDay() {
        return day;
    }

    public void setDay(Day day) {
        this.day = day;
    }

    public void setParticipants(List<Participant> participants) {
        this.participants = participants;
    }

    public List<Participant> getParticipants() {
        return participants;
    }
}

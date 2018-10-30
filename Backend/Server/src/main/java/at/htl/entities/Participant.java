package at.htl.entities;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.LinkedList;
import java.util.List;

@Entity
@NamedQueries({
        @NamedQuery(name = "Participant.getAll",query = "select v from Participant v"),
        @NamedQuery(name = "Participant.getByUserId",query = "select s from Participant s where s.user.userId = :id")
})
@Table(name = "PARTICIPANT_DATA")
@XmlRootElement
public class Participant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int participantId;

    private String firstName;

    private String lastName;

    private Grad grad;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId")
    private User user;

    @ManyToMany(cascade = {CascadeType.PERSIST,CascadeType.MERGE})
    @JoinTable(name = "participant_appointment",
            joinColumns = @JoinColumn(name = "participantId"),
            inverseJoinColumns = @JoinColumn(name = "appointmentId"))
    private List<Appointment> appointments = new LinkedList<Appointment>();


    public void addAppointment(Appointment app) {
        appointments.add(app);
        app.getParticipants().add(this);
    }

    public Participant() {
    }

    public Participant(String firstName, String lastName, Grad grad) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grad = grad;
    }



    //Getter and Setter
    public int getParticipantId() {
        return participantId;
    }


    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getGrad() {
        return grad.toString();
    }

    public void setGrad(Grad grad) {
        this.grad = grad;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Appointment> getAppointments() {
        return appointments;
    }

    public void setAppointments(List<Appointment> appointments) {
        this.appointments = appointments;
    }
}

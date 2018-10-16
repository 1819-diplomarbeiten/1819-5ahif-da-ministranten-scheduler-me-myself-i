package at.htl.entities;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

@Entity
@NamedQueries({
        @NamedQuery(name = "Day.getAll",query = "select v from Day v")
})
@Table(name = "DAY_DATA")
@XmlRootElement
public class Day {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int dayId;

    private LocalDateTime dayDate;

    private LocalDateTime available;

    private LocalDateTime deadline;

    @OneToMany(mappedBy = "day", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Appointment> appointmentList = new LinkedList<Appointment>();


    public Day() {
    }

    public Day(LocalDateTime dayDate, LocalDateTime available, LocalDateTime deadline) {
        this.dayDate = dayDate;
        this.available = available;
        this.deadline = deadline;
    }

    //Getter and Setter
    public int getDayId() {
        return dayId;
    }

    public LocalDateTime getDayDate() {
        return dayDate;
    }

    public LocalDateTime getAvailable() {
        return available;
    }

    public LocalDateTime getDeadline() {
        return deadline;
    }

    public List<Appointment> getAppointmentList() {
        return appointmentList;
    }

    public void setDayDate(LocalDateTime dayDate) {
        this.dayDate = dayDate;
    }

    public void setAvailable(LocalDateTime available) {
        this.available = available;
    }

    public void setDeadline(LocalDateTime deadline) {
        this.deadline = deadline;
    }

    public void setAppointmentList(List<Appointment> appointmentList) {
        this.appointmentList = appointmentList;
    }
}

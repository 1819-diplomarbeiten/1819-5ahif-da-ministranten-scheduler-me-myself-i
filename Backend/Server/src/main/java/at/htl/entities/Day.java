package at.htl.entities;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.LinkedList;
import java.util.List;

@Entity
@NamedQueries({
        @NamedQuery(name = "Day.getAll",query = "select v from Day v"),
        @NamedQuery(name = "Day.deleteById",query = "delete from Day v where v.dayId = :id"),
        @NamedQuery(name = "Day.findById",query = "select v from Day v where v.dayId = :id")
})
@Table(name = "DAY_DATA")
@XmlRootElement
public class Day implements Serializable {
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

    public String getDayDate() {
        return dayDate.toString();
    }

    public String getAvailable() {
        return available.toString();
    }

    public String getDeadline() {
        return deadline.toString();
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

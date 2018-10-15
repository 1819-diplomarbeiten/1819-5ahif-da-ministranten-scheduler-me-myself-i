package at.htl.entities;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

@Entity
@NamedQueries({
        @NamedQuery(name = "Day.getAll",query = "select v from Day v")
})
public class Day {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int dayId;

    private Date dayDate;

    private LocalDateTime available;

    private LocalDateTime deadline;

    @OneToMany(mappedBy = "day", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Appointment> appointmentList = new LinkedList<Appointment>();


    public Day() {
    }


    //Getter and Setter
    public int getDayId() {
        return dayId;
    }

    public Date getDayDate() {
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

    public void setDayDate(Date dayDate) {
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

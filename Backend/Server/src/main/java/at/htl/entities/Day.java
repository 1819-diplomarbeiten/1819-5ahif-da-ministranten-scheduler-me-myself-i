package at.htl.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
public class Day {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int DayId;

    Date dayDate;

    LocalDateTime available;

    LocalDateTime deadline;
}

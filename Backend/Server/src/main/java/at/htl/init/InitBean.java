package at.htl.init;

import at.htl.entities.*;
import at.htl.facade.AppointmentFacade;
import at.htl.facade.DayFacade;
import at.htl.facade.ParticipantFacade;
import at.htl.facade.UserFacade;

import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;


@Startup
@Singleton
public class InitBean {

    @Inject
    AppointmentFacade af;

    @Inject
    DayFacade df;

    @Inject
    ParticipantFacade pf;

    @Inject
    UserFacade uf;

    @PostConstruct
    public void init() {

        User u = new User("as12df34","Hallo","pasdfjkla@gmail.com",06676767,7466886,false,false);
        Participant p = new Participant("patrick","mistlberger",Grad.Ministrant,u);
        Day d = new Day(LocalDateTime.now(),LocalDateTime.now(),LocalDateTime.now());
        Appointment a = new Appointment(LocalTime.now(),5,5,d);
        uf.createUser(u);
        pf.createParticipant(p);
        df.createDay(d);
        af.createAppointment(a);
    }
}

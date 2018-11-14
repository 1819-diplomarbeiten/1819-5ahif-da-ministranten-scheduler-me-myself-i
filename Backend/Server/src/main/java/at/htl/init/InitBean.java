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
import java.time.Clock;
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
        User u2 = new User("43fd21sa","Seas","omg@gmail.com",6761799,1921674201,true,true);
        Participant p = new Participant("patrick","mistlberger",Grad.Ministrant);
        Participant p2 = new Participant("herbert","schmied",Grad.Lektor);
        u.addParticipants(p);
        u2.addParticipants(p2);
        Day d = new Day(LocalDateTime.now(),LocalDateTime.now(),LocalDateTime.now());
        Day d2 = new Day(LocalDateTime.of(1999,5,10,16,30),LocalDateTime.of(1999,5,10,17,30),LocalDateTime.of(1999,5,10,20,30));
        Appointment a = new Appointment(LocalTime.now(),5,5,d);
        Appointment a2 = new Appointment(LocalTime.now(),6,6,d2);

        pf.createParticipant(p);
        pf.createParticipant(p2);
        uf.createUser(u);
        uf.createUser(u2);
        df.createDay(d);
        df.createDay(d2);
        af.createAppointment(a);
        af.createAppointment(a2);
    }
}

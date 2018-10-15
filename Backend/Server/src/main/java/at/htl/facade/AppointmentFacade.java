package at.htl.facade;


import at.htl.entities.Appointment;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class AppointmentFacade {

    @PersistenceContext
    EntityManager entityManager;


    public List<Appointment> getAllAppointments() {
        return entityManager.createNamedQuery("Appointment.getAll",Appointment.class).getResultList();
    }

    public Appointment getAppointmentById(int id) {
        return entityManager.find(Appointment.class,id);
    }

    public void updateAppointment(Appointment app) {
        this.entityManager.merge(app);
    }

    public void createAppointment(Appointment app) {
        this.entityManager.persist(app);
    }

    public void deleteAppointment(int id) {
        this.entityManager.remove(entityManager.find(Appointment.class,id));
    }
}

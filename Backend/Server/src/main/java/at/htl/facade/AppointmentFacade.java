package at.htl.facade;


import at.htl.entities.Appointment;
import at.htl.entities.Day;

import javax.ejb.Stateless;
import javax.json.*;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.io.Serializable;
import java.util.List;

@Stateless
public class AppointmentFacade implements Serializable {

    @PersistenceContext
    EntityManager entityManager;


    //return a JsonArray to the Rest Endpoint
    public JsonArray getAllAppointments() {
        List<Appointment> appointments = entityManager.createNamedQuery("Appointment.getAll", Appointment.class).getResultList();
        JsonArrayBuilder jsonArrayBuilder = Json.createArrayBuilder();
        for (Appointment a : appointments) {
            jsonArrayBuilder.add(buildSimpleAppointmentJson(a));
        }
        return jsonArrayBuilder.build();
    }

    public JsonObject getAppointmentById(int id) {
        return buildSimpleAppointmentJson(entityManager.createNamedQuery("Appointment.getByDayId",Appointment.class).setParameter("id",id).getSingleResult());
    }

    public void updateAppointment(Appointment app) {
        this.entityManager.merge(app);
    }

    public void createAppointment(Appointment app) {
        this.entityManager.persist(app);
    }

    public void deleteAppointment(int id) {
        this.entityManager.createNamedQuery("Appointment.deleteById",Appointment.class).setParameter("id",id).executeUpdate();
    }


    //converting into Json
    private JsonObject buildSimpleAppointmentJson(Appointment appointment) {
        JsonObjectBuilder userBuilder = Json.createObjectBuilder();
        return fillSimpleAppointmentBuilder(userBuilder, appointment).build();
    }

    //build a JsonObject and in the Object is an JsonArray
    private JsonObjectBuilder fillSimpleAppointmentBuilder(JsonObjectBuilder objectBuilder, Appointment appointment) {
        return objectBuilder.add("id", appointment.getAppointmentId())
                .add("current_lec", appointment.getRequired_Lec())
                .add("current_mini", appointment.getRequired_Mini())
                .add("grad", appointment.getTime())
                .add("day",fillSimpleDayToAppointmentBuilder(appointment.getDay()));
    }

    private JsonObject fillSimpleDayToAppointmentBuilder(Day day) {
        return Json.createObjectBuilder()
                .add("id", day.getDayId())
                .add("current_date", day.getDayDate())
                .add("release", day.getAvailable())
                .add("deadline", day.getDeadline()).build();
    }
}

package at.htl.facade;

import at.htl.entities.Appointment;
import at.htl.entities.Day;

import javax.ejb.Stateless;
import javax.json.*;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class DayFacade {

    @PersistenceContext
    EntityManager entityManager;


    public JsonArray getAllDay() {
        List<Day> days = entityManager.createNamedQuery("Day.getAll", Day.class).getResultList();
        JsonArrayBuilder jsonArrayBuilder = Json.createArrayBuilder();
        for (Day d : days) {
            jsonArrayBuilder.add(buildSimpleDayJson(d));
        }
        return jsonArrayBuilder.build();
    }

    public JsonObject getDayById(int id) {
        return buildSimpleDayJson(entityManager.createNamedQuery("Day.findById",Day.class).setParameter("id",id).getSingleResult());
    }

    public void updatDay(Day day) {
        this.entityManager.merge(day);
    }

    public void createDay(Day day) {
        this.entityManager.persist(day);
    }

    public void deleteDay(int id) {
        this.entityManager.createNamedQuery("Day.deleteById",Day.class).setParameter("id",id).executeUpdate();
    }

    //build a JsonObject per user
    private JsonObject buildSimpleDayJson(Day day) {
        JsonObjectBuilder userBuilder = Json.createObjectBuilder();
        return fillSimpleDayBuilder(userBuilder, day).build();
    }

    //build a JsonObject and in the Object is an JsonArray
    private JsonObjectBuilder fillSimpleDayBuilder(JsonObjectBuilder objectBuilder, Day day) {
        return objectBuilder.add("id", day.getDayId())
                .add("current_date", day.getDayDate())
                .add("release", day.getAvailable())
                .add("deadline", day.getDeadline())
                .add("appointments",fillSimpleAppointmentsToDayBuilder(day));
    }

    //build the Participant for every User to an JsonArray //noch nicht fix
    private JsonArray fillSimpleAppointmentsToDayBuilder(Day day) {
        List<Appointment> appointments = entityManager
                .createNamedQuery("Appointment.getByDayId", Appointment.class)
                .setParameter("id", day.getDayId())
                .getResultList();
        JsonArrayBuilder jsonArrayBuilder = Json.createArrayBuilder();
        for (Appointment a : appointments) {
            jsonArrayBuilder
                    .add(Json.createObjectBuilder()
                            .add("id", a.getAppointmentId())
                            .add("current_lec", a.getRequired_Lec())
                            .add("current_mini", a.getRequired_Mini())
                            .add("grad", a.getTime())).build();
        }
        return jsonArrayBuilder.build();
    }
}

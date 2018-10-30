package at.htl.facade;


import at.htl.entities.Participant;
import at.htl.entities.User;

import javax.ejb.Stateless;
import javax.json.*;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class ParticipantFacade {

    @PersistenceContext
    EntityManager entityManager;


    //return a JsonArray to the Rest Endpoint
    public JsonArray getAllParticipant() {
        List<Participant> participants = entityManager.createNamedQuery("Participant.getAll", Participant.class).getResultList();
        JsonArrayBuilder jsonArrayBuilder = Json.createArrayBuilder();
        for (Participant p : participants) {
            jsonArrayBuilder.add(buildSimpleParticipantJson(p));
        }
        return jsonArrayBuilder.build();
    }

    public JsonObject getParticipantById(int id) {
        return buildSimpleParticipantJson(entityManager.createNamedQuery("Participant.getById",Participant.class).setParameter("id",id).getSingleResult());
    }

    public void updateParticipant(Participant part) {
        this.entityManager.merge(part);
    }

    public void createParticipant(Participant part) {
        this.entityManager.persist(part);
    }

    public void deleteParticipant(int id) {
        this.entityManager.createNamedQuery("Participant.deleteById",Participant.class).setParameter("id",id).executeUpdate();
    }


    //converting into Json
    private JsonObject buildSimpleParticipantJson(Participant participant) {
        JsonObjectBuilder userBuilder = Json.createObjectBuilder();
        return fillSimpleParticipantBuilder(userBuilder, participant).build();
    }

    //build a JsonObject and in the Object is an JsonArray
    private JsonObjectBuilder fillSimpleParticipantBuilder(JsonObjectBuilder objectBuilder, Participant participant) {
        return objectBuilder.add("id", participant.getParticipantId())
                .add("first_name", participant.getFirstName())
                .add("last_name", participant.getLastName())
                .add("grad", participant.getGrad())
                .add("user",fillSimpleUserToParticipantBuilder(participant.getUser()));
    }

    private JsonObject fillSimpleUserToParticipantBuilder(User user) {
        return Json.createObjectBuilder()
                .add("id", user.getUserId())
                .add("username", user.getU_Name())
                .add("password", user.getU_Password())
                .add("email", user.getE_Mail())
                .add("email_rewind", user.getE_Mail_re())
                .add("phone_number", user.getPhoneNumber())
                .add("sec_phone_number", user.getPhoneNumberSec())
                .add("whats_app_rewind", user.getWhats_App_re()).build();
    }
}

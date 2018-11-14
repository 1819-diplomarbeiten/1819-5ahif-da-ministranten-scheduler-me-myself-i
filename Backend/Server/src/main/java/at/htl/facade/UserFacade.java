package at.htl.facade;

import at.htl.entities.Participant;
import at.htl.entities.User;

import javax.ejb.Stateless;
import javax.json.*;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.io.Serializable;
import java.util.List;

@Stateless
public class UserFacade implements Serializable {

    @PersistenceContext
    EntityManager entityManager;


    //return a JsonArray to the Rest Endpoint
    public JsonArray getAllUser() {
        List<User> users = entityManager.createNamedQuery("User.getAll", User.class).getResultList();
        JsonArrayBuilder jsonArrayBuilder = Json.createArrayBuilder();
        for (User u : users) {
            jsonArrayBuilder.add(buildSimpleUserJson(u));
        }
        return jsonArrayBuilder.build();
    }

    public JsonObject getUserById(int id) {
        return buildSimpleUserJson(entityManager.createNamedQuery("User.findById",User.class).setParameter("id",id).getSingleResult());
    }

    public void updateUser(User user) {
        this.entityManager.merge(user);
    }

    public void createUser(User user) {
        this.entityManager.persist(user);
    }

    public void deleteUser(int id) {
        this.entityManager.createNamedQuery("User.deleteById",User.class).setParameter("id",id).executeUpdate();
    }


    //build a JsonObject per user
    private JsonObject buildSimpleUserJson(User user) {
        JsonObjectBuilder userBuilder = Json.createObjectBuilder();
        return fillSimpleUserBuilder(userBuilder, user).build();
    }

    //build a JsonObject and in the Object is an JsonArray
    private JsonObjectBuilder fillSimpleUserBuilder(JsonObjectBuilder objectBuilder, User user) {
        return objectBuilder.add("id", user.getUserId())
                .add("username", user.getU_Name())
                .add("password", user.getU_Password())
                .add("email", user.getE_Mail())
                .add("email_rewind", user.getE_Mail_re())
                .add("phone_number", user.getPhoneNumber())
                .add("sec_phone_number", user.getPhoneNumberSec())
                .add("whats_app_rewind", user.getWhats_App_re())
                .add("participants",fillSimpleParticipantsToUserBuilder(user));
    }

    //build the Participant for every User to an JsonArray //noch nicht fix
    private JsonArray fillSimpleParticipantsToUserBuilder(User user) {
        List<Participant> participants = entityManager
                .createNamedQuery("Participant.getByUserId", Participant.class)
                .setParameter("id", user.getUserId())
                .getResultList();
        JsonArrayBuilder jsonArrayBuilder = Json.createArrayBuilder();
        for (Participant p : participants) {
            jsonArrayBuilder
                    .add(Json.createObjectBuilder()
                            .add("id", p.getParticipantId())
                            .add("first_name", p.getFirstName())
                            .add("last_name", p.getLastName())
                            .add("grad", p.getGrad())).build();
        }
        return jsonArrayBuilder.build();
    }
}


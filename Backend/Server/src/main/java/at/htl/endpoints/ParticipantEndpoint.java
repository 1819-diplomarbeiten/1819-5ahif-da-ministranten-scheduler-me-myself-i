package at.htl.endpoints;


import at.htl.entities.Participant;
import at.htl.facade.ParticipantFacade;

import javax.enterprise.context.SessionScoped;
import javax.inject.Inject;
import javax.json.JsonArray;
import javax.json.JsonObject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.Serializable;

@Path("participant")
@SessionScoped
public class ParticipantEndpoint implements Serializable {

    @Inject
    ParticipantFacade participantFacade;


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public JsonArray getAll() {
        return participantFacade.getAllParticipant();
    }

    @GET
    @Path("{id}")
    public JsonObject findById(@PathParam("id") int id) {
        return participantFacade.getParticipantById(id);
    }

    @DELETE
    @Path("{id}")
    public void delete(@PathParam("id") int id) {
        participantFacade.deleteParticipant(id);
    }

    @POST
    public void save(Participant participant) {
        participantFacade.updateParticipant(participant);
    }
}

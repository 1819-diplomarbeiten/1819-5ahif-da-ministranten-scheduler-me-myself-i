package at.htl.endpoints;


import at.htl.entities.Participant;
import at.htl.facade.ParticipantFacade;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("participant")
public class ParticipantEndpoint {

    @Inject
    ParticipantFacade participantFacade;


    @GET
    @Produces(MediaType.APPLICATION_XML)
    public List<Participant> getAll() {
        return participantFacade.getAllParticipant();
    }

    @GET
    @Path("{id}")
    public Participant findById(@PathParam("id") int id) {
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

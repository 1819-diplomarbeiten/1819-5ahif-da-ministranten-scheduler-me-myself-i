package at.htl.endpoints;


import at.htl.entities.Participant;
import at.htl.facade.ParticipantFacade;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
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
}

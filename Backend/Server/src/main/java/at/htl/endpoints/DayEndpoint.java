package at.htl.endpoints;


import at.htl.entities.Day;
import at.htl.facade.DayFacade;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("day")
public class DayEndpoint {

    @Inject
    DayFacade dayFacade;


    @GET
    @Produces(MediaType.APPLICATION_XML)
    public List<Day> getAll() {
        return dayFacade.getAllDay();
    }
}

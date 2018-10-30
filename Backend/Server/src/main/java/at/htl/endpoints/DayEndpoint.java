package at.htl.endpoints;


import at.htl.entities.Day;
import at.htl.facade.DayFacade;

import javax.enterprise.context.SessionScoped;
import javax.inject.Inject;
import javax.json.JsonArray;
import javax.json.JsonObject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.Serializable;

@Path("day")
@SessionScoped
public class DayEndpoint implements Serializable {

    @Inject
    DayFacade dayFacade;


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public JsonArray getAll() {
        return dayFacade.getAllDay();
    }

    @GET
    @Path("{id}")
    public JsonObject findById(@PathParam("id") int id) {
        return dayFacade.getDayById(id);
    }

    @DELETE
    @Path("{id}")
    public void delete(@PathParam("id") int id) {
        dayFacade.deleteDay(id);
    }

    @POST
    public void save(Day day) {
        dayFacade.updatDay(day);
    }
}

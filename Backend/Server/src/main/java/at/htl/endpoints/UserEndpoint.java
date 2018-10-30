package at.htl.endpoints;

import at.htl.entities.User;
import at.htl.facade.UserFacade;

import javax.enterprise.context.SessionScoped;
import javax.inject.Inject;
import javax.json.JsonArray;
import javax.json.JsonObject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.Serializable;

@Path("user")
@SessionScoped
public class UserEndpoint implements Serializable {

    @Inject
    UserFacade userFacade;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public JsonArray getAll() {
        return userFacade.getAllUser();
    }

    @GET
    @Path("{id}")
    public JsonObject findById(@PathParam("id") int id) {
        return userFacade.getUserById(id);
    }

    @DELETE
    @Path("{id}")
    public void delete(@PathParam("id") int id) {
        userFacade.deleteUser(id);
    }

    @POST
    public void save(User user) {
        userFacade.updateUser(user);
    }
}

package at.htl.endpoints;

import at.htl.entities.User;
import at.htl.facade.UserFacade;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.LinkedList;
import java.util.List;

@Path("user")
public class UserEndpoint {

    @Inject
    UserFacade userFacade;

    @GET
    @Produces(MediaType.APPLICATION_XML)
    public List<User> getAll() {
        List<User> p = new LinkedList<User>();
        p.addAll(userFacade.getAllUser());
        return p;
    }

    @GET
    @Path("{id}")
    public User findById(@PathParam("id") int id) {
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

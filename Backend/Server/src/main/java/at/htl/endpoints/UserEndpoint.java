package at.htl.endpoints;

import at.htl.entities.User;
import at.htl.facade.UserFacade;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
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
}

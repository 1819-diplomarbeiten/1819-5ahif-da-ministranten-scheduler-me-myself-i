package at.htl.endpoints;


import at.htl.entities.Appointment;
import at.htl.facade.AppointmentFacade;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("appointment")
public class AppointmentEndpoint {

    @Inject
    AppointmentFacade appointmentFacade;


    @GET
    @Produces(MediaType.APPLICATION_XML)
    public List<Appointment> getAll() {
        return appointmentFacade.getAllAppointments();
    }
}

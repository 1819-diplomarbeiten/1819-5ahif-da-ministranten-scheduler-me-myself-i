package at.htl.endpoints;


import at.htl.entities.Appointment;
import at.htl.facade.AppointmentFacade;

import javax.inject.Inject;
import javax.ws.rs.*;
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

    @GET
    @Path("{id}")
    public Appointment findById(@PathParam("id") int id) {
        return appointmentFacade.getAppointmentById(id);
    }

    @DELETE
    @Path("{id}")
    public void delete(@PathParam("id") int id) {
        appointmentFacade.deleteAppointment(id);
    }

    @POST
    public void save(Appointment appointment) {
        appointmentFacade.updateAppointment(appointment);
    }
}

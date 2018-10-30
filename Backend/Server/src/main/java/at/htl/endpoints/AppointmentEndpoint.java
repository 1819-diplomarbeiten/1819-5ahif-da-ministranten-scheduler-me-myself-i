package at.htl.endpoints;


import at.htl.entities.Appointment;
import at.htl.facade.AppointmentFacade;

import javax.inject.Inject;
import javax.json.JsonArray;
import javax.json.JsonObject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("appointment")
public class AppointmentEndpoint {

    @Inject
    AppointmentFacade appointmentFacade;


    @GET
    @Produces(MediaType.APPLICATION_XML)
    public JsonArray getAll() {
        return appointmentFacade.getAllAppointments();
    }

    @GET
    @Path("{id}")
    public JsonObject findById(@PathParam("id") int id) {
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

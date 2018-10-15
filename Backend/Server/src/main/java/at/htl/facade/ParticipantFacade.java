package at.htl.facade;


import at.htl.entities.Participant;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class ParticipantFacade {

    @PersistenceContext
    EntityManager entityManager;


    public List<Participant> getAllParticipant() {
        return entityManager.createNamedQuery("Participant.getAll",Participant.class).getResultList();
    }

    public Participant getParticipantById(int id) {
        return entityManager.find(Participant.class,id);
    }

    public void updateParticipant(Participant part) {
        this.entityManager.merge(part);
    }

    public void createParticipant(Participant part) {
        this.entityManager.persist(part);
    }

    public void deleteParticipant(int id) {
        this.entityManager.remove(entityManager.find(Participant.class,id));
    }
}

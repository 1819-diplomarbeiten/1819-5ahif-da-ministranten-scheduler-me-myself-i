package at.htl.facade;

import at.htl.entities.Day;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class DayFacade {

    @PersistenceContext
    EntityManager entityManager;


    public List<Day> getAllDay() {
        return entityManager.createNamedQuery("Day.getAll",Day.class).getResultList();
    }

    public Day getDayById(int id) {
        return entityManager.find(Day.class,id);
    }

    public void updatDay(Day day) {
        this.entityManager.merge(day);
    }

    public void createDay(Day day) {
        this.entityManager.persist(day);
    }

    public void deleteDay(int id) {
        this.entityManager.remove(entityManager.find(Day.class,id));
    }
}

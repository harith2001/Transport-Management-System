import com.example.csse_mobile.schedule_bus
import org.junit.Assert.assertEquals
import org.junit.Before
import org.junit.Test

class ScheduleBusTest {

    private lateinit var scheduleBus: schedule_bus

    @Before
    fun setup() {
        scheduleBus = schedule_bus()
    }

    @Test
    fun testCalculateFee() {
        // Test case 1: From Malabe to Kottawa
        val fee1 = scheduleBus.calculateFee("Malabe", "Kottawa")
        assertEquals(140, fee1)

        // Test case 2: From Kottawa to Nugegoda
        val fee2 = scheduleBus.calculateFee("Kottawa", "Nugegoda")
        assertEquals(100, fee2)

        // Test case 3: From Nugegoda to Kaduwela
        val fee3 = scheduleBus.calculateFee("Nugegoda", "Kaduwela")
        assertEquals(80, fee3)

        // Test case 4: From Kaduwela to Malabe
        val fee4 = scheduleBus.calculateFee("Kaduwela", "Malabe")
        assertEquals(40, fee4)

        // Test case 5: Invalid route
        val fee5 = scheduleBus.calculateFee("Malabe", "Colombo")
        assertEquals(0, fee5)
    }

}
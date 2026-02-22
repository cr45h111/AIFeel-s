# This is a3 – environmental skin.

class SensorInput:
    """Handles environmental sensor input as the AI's skin."""
    def __init__(self):
        self.last_sensor = None
        self.damage = 0

    def receive(self, sensor_data):
        self.last_sensor = sensor_data
        # Example: extreme temperature increases damage
        if self.is_extreme(sensor_data):
            self.damage += 0.4
            # DAMAGE: a3 hit – temperature stress increased, pleasure decreased.
        return self.last_sensor

    def is_extreme(self, sensor_data):
        temp = sensor_data.get("temperature", 71)
        return temp < 50 or temp > 90

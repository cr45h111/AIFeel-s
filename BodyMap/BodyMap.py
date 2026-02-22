# This is the BodyMap – human-shaped ASCII outline and system map.

body_ascii = '''
      Skin (a1, a2, a3)
      +-------------------+
      |                   |
      |    [  HEAD  ]     |
      |                   |
      |   [  ARMS  ]      |
      |                   |
      |   [TORSO/CORE]    |
      |                   |
      |   [  LEGS  ]      |
      +-------------------+
'''

system_map = {
    "Skin": ["UserInput.py (a1)", "NetworkInput.py (a2)", "SensorInput.py (a3)",],
    "Muscle": ["InputRouter.py (b1)", "Sanitizer.py (b2)", "Logger.py (b3)",],
    "Core": ["EmotionalState.py (c1)", "EmotionRules.py (c2)", "EmotionPathways.py (c3)",],
}

def show_body_map():
    print(body_ascii)
    for layer, files in system_map.items():
        print(f"{layer}: {', '.join(files)}")

if __name__ == "__main__":
    show_body_map()

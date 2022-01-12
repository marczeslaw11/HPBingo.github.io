// The order matters for the regexes!
// Run test/tracket-test.js to confirm both EN and JP match in the same way after changing/adding
window.trackerData = [
  {
    regex: /(\d+) Bronze Wizard Cards/i,
    options: {
      counter: {
        icon: 'bronze'
      }
    }
  },
  {
    regex: /(\d+) Wizard Cards/i,
    options: {
      counter: {
        icon: 'bronze'
      }
    }
  },
  {
    regex: /(\d+) different.*Challenge Stars/i,
    options: {
      counter: {
        icon: 'star'
      }
    }
  },
  {
    regex: /4 Spell Challenge completion stars/i,
    options: {
      tokens: {
        rows: [
          ['rictusempra', 'skurge', 'diffindo', 'spongify']
        ]
      },
      counter: {
        denominator: 4,
        icon: 'star'
      }
    }
  },
  {
    regex: /5 different Challenge Stars from each challenge/i,
    options: {
      tokens: {
        rows: [
          ['rictusempra', 'skurge', 'diffindo', 'spongify']
        ]
      },
      counter: {
        denominator: 20,
        icon: 'star'
      }
    }
  },
  {
    regex: /8 Unique Flobberworm Mucus/i,
    options: {
        counter: {
        denominator: 8,
        icon: 'mucus'
      }
    }
  },
  {
    regex: /Buy (\d+) .*Wizard Cards/i,
    options: {
      counter: {
        icon: 'silver'
      }
    }
  },
  {
    regex: /Clip 7 Gnomes out of bounds/i,
    options: {
      counter: {
        denominator: 7,
        icon: 'gnome'
      }
    }
  },
  {
    regex: /Kill 10 bowtruckles/i,
    options: {
      counter: {
        denominator: 10
        icon: 'bowtruckle'
      }
    }
  },
  {
    regex: /Kill 12 spiders outside the Aragog fight/i,
    options: {
      counter: {
        denominator: 12
        icon: 'spider'
      }
    }
  },
  {
    regex: /Kill 7 Imps/i,
    options: {
      counter: {
        denominator: 7
        icon: 'imp'
      }
    }
  }
];
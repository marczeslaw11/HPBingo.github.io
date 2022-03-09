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
    regex: /8 different.*Challenge Stars/i,
    options: {
      counter: {
        denominator: 8,
        icon: 'star'
      }
    }
  },
  {
    regex: /17 different Challenge Stars/i,
    options: {
      counter: {
        denominator: 17,
        icon: 'star'
      }
    }
  },
  {
    regex: /31 different Challenge Stars/i,
    options: {
      counter: {
        denominator: 31,
        icon: 'star'
      }
    }
  },
  {
    regex: /9 different.*Challenge Stars/i,
    options: {
      counter: {
        denominator: 9,
        icon: 'star'
      }
    }
  },
  {
    regex: /13 different.*Challenge Stars/i,
    options: {
      counter: {
        denominator: 13,
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
        icon: 'flipendo'
      }
    }
  },
  {
    regex: /Kill 10 bowtruckles/i,
    options: {
      counter: {
        denominator: 10,
        icon: 'diffindo'
      }
    }
  },
  {
    regex: /Kill 12 spiders outside the Aragog fight/i,
    options: {
      counter: {
        denominator: 12,
        icon: 'rictusempra'
      }
    }
  },
  {
    regex: /Kill 7 Imps/i,
    options: {
      counter: {
        denominator: 7,
        icon: 'flipendo'
      }
    }
  },
  {
    regex: /Cast at (\d) different Lumos statues in .*/i,
    options: {
      counter: {
        denominator: 3,
        icon: 'lumos'
      }
    }
  },
  {
    regex: /Empty 8 flower pots/i,
    options: {
      counter: {
        denominator: 8,
        icon: 'flipendo'
      }
    }
  },
  {
    regex: /Empty 10 armor stands/i,
    options: {
      counter: {
        denominator: 10,
        icon: 'flipendo'
      }
    }
  },
  {
    regex: /Empty 7 bean boxes/i,
    options: {
      counter: {
        denominator: 7,
        icon: 'alohomora'
      }
    }
  },
  {
    regex: /Empty 10 cauldrons/i,
    options: {
      counter: {
        denominator: 10,
        icon: 'flipendo'
      }
    }
  },
  {
    regex: /Open 4 Peeves chests/i,
    options: {
      tokens: {
        rows: [
          ['skurge', 'bicorn', 'diffindo', 'goyle', 'spongify']
        ]
      },
      counter: {
        denominator: 4,
        icon: 'alohomora'
      }
    }
  }
];

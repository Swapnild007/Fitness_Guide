(() => {
  const workoutSets = {
    'Dead bug': { reps: '8 / side', cue: 'Keep your lower back gently connected to the floor.' },
    'Squat': { reps: '10', cue: 'Sit between your hips, keep the chest tall, then drive through the floor.' },
    'Incline push-up': { reps: '8', cue: 'Keep your body in one line and lower under control.' },
    'Glute bridge': { reps: '12', cue: 'Drive through your heels and squeeze the glutes at the top.' },
    'Split squat': { reps: '10 / side', cue: 'Lower straight down, keep the front foot planted and knee tracking naturally.' },
    'Push-up': { reps: '10', cue: 'Brace the trunk and move the chest toward the floor as one unit.' },
    'Hip hinge': { reps: '12', cue: 'Push the hips back while keeping the spine long.' },
    'Reverse lunge': { reps: '10 / side', cue: 'Step back softly, lower with control, then return through the front foot.' },
    'Single-leg bridge': { reps: '10 / side', cue: 'Keep the pelvis level while lifting through the working heel.' }
  };

  const getMoves = () => {
    const p = state.profile || state.form || { experience: 'beginner' };
    const q = plan();
    return q.list.map((m, i) => ({ name: m[0], target: m[1], area: m[2], ...workoutSets[m[0]], number: i + 1 }));
  };

  function enhancedTrain() {
    const p = state.profile || { experience: 'beginner', minutes: 30, environment: 'home' };
    const q = plan();
    const moves = getMoves();
    return `<section class="train-v4 page-in">
      <div class="train-head">
        <div><div class="eyebrow">TODAY'S TRAINING</div><h1 class="train-title">Ready to<br>move.</h1><p class="sub">${q.mins} min · ${esc(p.environment)} · ${esc(p.experience)}</p></div>
        <div class="session-badge"><b>${moves.length}</b><span>moves</span></div>
      </div>
      <button class="hero-session" data-action="start-workout">
        <div class="session-art"><i class="v4-orb one"></i><i class="v4-orb two"></i><i class="v4-orb three"></i><span>TRAIN</span></div>
        <div class="session-copy"><span class="eyebrow">${esc(q.title)}</span><strong>Full body foundation</strong><small>Tap to begin · guided session</small><b class="session-arrow">↗</b></div>
      </button>
      <div class="section-head"><div><div class="eyebrow">YOUR SESSION</div><h2>One move at a time.</h2></div><span class="tiny">${moves.length} exercises</span></div>
      <div class="exercise-stack">${moves.map(m => `<button class="exercise-card" data-action="exercise" data-name="${esc(m.name)}" data-detail="${esc(m.target)} · ${esc(m.area)}">
        <span class="exercise-number">${String(m.number).padStart(2,'0')}</span><span class="exercise-main"><strong>${esc(m.name)}</strong><small>${esc(m.target)} · ${esc(m.area)}</small></span><span class="exercise-play">›</span>
      </button>`).join('')}</div>
      <article class="training-note"><span class="eyebrow">COACH NOTE</span><p>Quality first. Leave a little room in the tank and build consistency across the week.</p></article>
    </section>`;
  }

  function enhancedStartWorkout() {
    const moves = getMoves();
    state.workoutIndex = 0;
    state.workoutDone = new Set();
    renderWorkoutStep();
  }

  function renderWorkoutStep() {
    const moves = getMoves();
    const index = Math.min(state.workoutIndex || 0, moves.length - 1);
    const m = moves[index];
    const done = state.workoutDone ? state.workoutDone.size : 0;
    openSheet(`<div class="workout-v4"><div class="sheet-handle"></div>
      <div class="workout-top"><button class="round-close" data-action="close-sheet">×</button><div class="eyebrow">SESSION · ${index + 1} OF ${moves.length}</div><span>${Math.round(done / moves.length * 100)}%</span></div>
      <div class="workout-progress"><i style="width:${((index + 1) / moves.length) * 100}%"></i></div>
      <div class="movement-art"><i class="v4-orb one"></i><i class="v4-orb two"></i><span>${String(m.number).padStart(2,'0')}</span></div>
      <div class="movement-meta"><div class="eyebrow">${esc(m.area)}</div><h2>${esc(m.name)}</h2><p>${esc(m.cue)}</p></div>
      <div class="target-panel"><div><small>TARGET</small><strong>${esc(m.reps || m.target)}</strong></div><div><small>EFFORT</small><strong>Easy → moderate</strong></div></div>
      <div class="workout-actions"><button class="secondary" data-action="workout-skip">Skip</button><button class="primary" data-action="workout-done">Mark complete <span>✓</span></button></div>
    </div>`);
  }

  function finishWorkout() {
    if (state.profile) {
      state.profile.completed = (state.profile.completed || 0) + 1;
      localStorage.setItem('fitguide-profile', JSON.stringify(state.profile));
    }
    openSheet(`<div class="completion-v4"><div class="sheet-handle"></div><div class="completion-ring">✓</div><div class="eyebrow">SESSION COMPLETE</div><h2>Nice work.</h2><p class="sub">You finished today's planned session. Consistency is what compounds.</p><div class="completion-stat"><strong>${getMoves().length}</strong><span>movements completed</span></div><button class="primary" data-action="close-sheet">Back to Today <span>↗</span></button></div>`);
  }

  window.train = enhancedTrain;
  window.startWorkout = enhancedStartWorkout;

  document.addEventListener('click', e => {
    const el = e.target.closest('[data-action]');
    if (!el) return;
    const a = el.dataset.action;
    if (a === 'start-workout') { setTimeout(() => enhancedStartWorkout(), 0); }
    if (a === 'exercise') {
      const name = el.dataset.name || 'Exercise';
      const m = workoutSets[name] || {};
      setTimeout(() => openSheet(`<div class="movement-detail-v4"><div class="sheet-handle"></div><div class="movement-art"><i class="v4-orb one"></i><i class="v4-orb two"></i><span>FORM</span></div><div class="eyebrow">EXERCISE</div><h2>${esc(name)}</h2><p class="sub">${esc(m.cue || el.dataset.detail || 'Move with control and steady breathing.')}</p><div class="target-panel"><div><small>TARGET</small><strong>${esc(m.reps || 'Follow plan')}</strong></div><div><small>FOCUS</small><strong>${esc(el.dataset.detail || 'Full body')}</strong></div></div><button class="primary" data-action="close-sheet">Done <span>✓</span></button></div>`), 0);
    }
    if (a === 'workout-done') {
      state.workoutDone.add(state.workoutIndex);
      if (state.workoutIndex >= getMoves().length - 1) finishWorkout();
      else { state.workoutIndex += 1; renderWorkoutStep(); }
    }
    if (a === 'workout-skip') {
      if (state.workoutIndex >= getMoves().length - 1) finishWorkout();
      else { state.workoutIndex += 1; renderWorkoutStep(); }
    }
  });
})();
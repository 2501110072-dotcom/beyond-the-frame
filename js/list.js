/* 작가 목록 LIST: 이름 검색, 학생 카드와 3D 썸네일 */
let filter = -1;

const thumbObj = new Map();
function drawThumb(canvas, url) {
  const t = thumbObj.get(url); if (!t) return;
  const keep = D3.obj; if (keep) D3.scene.remove(keep);
  t.obj.rotation.y = t.angle; D3.scene.add(t.obj); D3.obj = t.obj;
  const px = canvas.width;
  D3.r.setSize(px / D3.r.getPixelRatio(), px / D3.r.getPixelRatio(), false); frameModel(px, px); D3.r.render(D3.scene, D3.cam);
  const x = canvas.getContext('2d'); x.clearRect(0, 0, px, px); x.drawImage(D3.r.domElement, 0, 0, px, px);
  D3.scene.remove(t.obj); D3.obj = keep; if (keep) D3.scene.add(keep);
}
async function mountThumb(el, url) {
  await initDetail3D();
  const tpl = await loadModel(url);
  if (!thumbObj.has(url)) thumbObj.set(url, { obj: tpl.clone(true), angle: 0 });
  if (!el.isConnected) return;
  const c = document.createElement('canvas'); c.width = c.height = Math.round(420 * Math.min(D3.r.getPixelRatio(), 2)); c.setAttribute('aria-hidden', 'true');
  el.replaceChildren(c); el.classList.add('live'); drawThumb(c, url);
}
let spin = null;
const grid = $('#grid');
grid.addEventListener('pointerdown', (e) => {
  const th = e.target.closest('.thumb.live'); if (!th || e.button > 0) return;
  spin = { th, x: e.clientX, url: MODELS[th.dataset.model] }; th.dataset.spun = '';
  try { th.setPointerCapture(e.pointerId); } catch (err) {  }
});
grid.addEventListener('pointermove', (e) => {
  if (!spin) return;
  const dx = e.clientX - spin.x; spin.x = e.clientX; if (!dx) return;
  spin.th.dataset.spun = '1';
  const t = thumbObj.get(spin.url); if (t) { t.angle += dx * .012; drawThumb(spin.th.firstElementChild, spin.url); }
});
grid.addEventListener('pointerup', () => { spin = null; });
grid.addEventListener('pointercancel', () => { spin = null; });
function renderList() {
  const q = $('#search').value.trim();
  const rows = STUDENTS.filter((s) => (filter < 0 || s.room === filter) && (!q || s.name.includes(q)));
  $('#grid').innerHTML = rows.map((s) => `
    <button class="card" type="button" data-i="${s.no - 1}">
      <span class="thumb" data-model="${MODELS[s.name] ? s.name : ''}">${bustSVG([-1, 1, 0][s.no % 3])}</span>
      <span class="meta"><b>${s.name}</b><em>${pad(s.no)}</em></span>
      <span class="gal">GALLERY ${pad(s.room + 1)}</span>
      <span class="card-slogan">${s.slogan}</span>
    </button>`).join('');
  $('#total').textContent = `총 인원 ${STUDENTS.length}명`;
  $('#empty').hidden = rows.length > 0;
  $$('#grid .card').forEach((b) => b.addEventListener('click', () => {
    const th = $('.thumb', b);
    if (th && th.dataset.spun) { th.dataset.spun = ''; return; }
    const s = STUDENTS[+b.dataset.i];
    setRoom(s.room); go('gallery'); arrive(galleryCam); openDetail(s.no - 1);
  }));
  $$('#grid .thumb[data-model]').forEach((el) => {
    const name = el.dataset.model; if (!name) return;
    mountThumb(el, MODELS[name]).catch((e) => report3D(e, 'model'));
  });
}
$('#search').addEventListener('input', renderList);

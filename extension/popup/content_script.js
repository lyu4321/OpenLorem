let clickedElement = null;

function setClickedElement(event) {
    //right click
    if (event.button == 2) {
        clickedElement = event.target;
    }
}

document.addEventListener("mousedown", setClickedElement, true);

// support for iframe elements
window.addEventListener("load", () => {
    let elementList = document.querySelectorAll("iframe");
    elementList.forEach((element) => {
        element.contentWindow.document.addEventListener("mousedown", setClickedElement, true);
    });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request == "getClickedEl") {
        console.log(clickedElement);
        clickedElement.innerHTML = getLorem();
        sendResponse({value: clickedElement.value});
    }
});

function getLorem() {
    return data[Math.floor(Math.random() * data.length)];
}

var data = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptatem cum summum bonum diceret, primum in eo ipso parum vidit, deinde hoc quoque alienum; Estne, quaeso, inquam, sitienti in bibendo voluptas? Frater et T. Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur. Duo Reges: constructio interrete. Sed venio ad inconstantiae crimen, ne saepius dicas me aberrare; Quae animi affectio suum cuique tribuens atque hanc, quam dico. Post enim Chrysippum eum non sane est disputatum. Haeret in salebra.",
    "Qui potest igitur habitare in beata vita summi mali metus? Ergo in gubernando nihil, in officio plurimum interest, quo in genere peccetur. Expressa vero in iis aetatibus, quae iam confirmatae sunt. Isto modo ne improbos quidem, si essent boni viri. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Quicquid porro animo cernimus, id omne oritur a sensibus; Minime vero, inquit ille, consentit. Tecum optime, deinde etiam cum mediocri amico.",
    "Uterque enim summo bono fruitur, id est voluptate. Nam Pyrrho, Aristo, Erillus iam diu abiecti. Qui enim voluptatem ipsam contemnunt, iis licet dicere se acupenserem maenae non anteponere. Istam voluptatem perpetuam quis potest praestare sapienti? Quae animi affectio suum cuique tribuens atque hanc, quam dico.",
    "Sed quid ages tandem, si utilitas ab amicitia, ut fit saepe, defecerit? Quia dolori non voluptas contraria est, sed doloris privatio. Quod si ita se habeat, non possit beatam praestare vitam sapientia. Ita graviter et severe voluptatem secrevit a bono. Nam his libris eum malo quam reliquo ornatu villae delectari. Quod praeceptum quia maius erat, quam ut ab homine videretur, idcirco assignatum est deo. Ad eas enim res ab Epicuro praecepta dantur. Duo enim genera quae erant, fecit tria.",
    "Odium autem et invidiam facile vitabis. Sed quot homines, tot sententiae; Illud non continuo, ut aeque incontentae. Nec vero alia sunt quaerenda contra Carneadeam illam sententiam. Quis non odit sordidos, vanos, leves, futtiles? Ut enim consuetudo loquitur, id solum dicitur honestum, quod est populari fama gloriosum. Sed tamen est aliquid, quod nobis non liceat, liceat illis. Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit.",
    "Tu vero, inquam, ducas licet, si sequetur; Omnis enim est natura diligens sui. Quae cum dixisset, finem ille. Ratio quidem vestra sic cogit. Universa enim illorum ratione cum tota vestra confligendum puto. Nam illud quidem adduci vix possum, ut ea, quae senserit ille, tibi non vera videantur. Quam tu ponis in verbis, ego positam in re putabam.",
    "Quorum altera prosunt, nocent altera. Illis videtur, qui illud non dubitant bonum dicere -; Quare ad ea primum, si videtur; Claudii libidini, qui tum erat summo ne imperio, dederetur. De vacuitate doloris eadem sententia erit. Quam ob rem tandem, inquit, non satisfacit? Consequentia exquirere, quoad sit id, quod volumus, effectum.",
    "Sed ea mala virtuti magnitudine obruebantur. At negat Epicurus-hoc enim vestrum lumen estquemquam, qui honeste non vivat, iucunde posse vivere. Dempta enim aeternitate nihilo beatior Iuppiter quam Epicurus; Itaque nostrum est-quod nostrum dico, artis est-ad ea principia, quae accepimus. Theophrasti igitur, inquit, tibi liber ille placet de beata vita? Sed haec omittamus;",
    "Illud dico, ea, quae dicat, praeclare inter se cohaerere. Tum Triarius: Posthac quidem, inquit, audacius. Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum. Indicant pueri, in quibus ut in speculis natura cernitur. Quonam, inquit, modo? Egone quaeris, inquit, quid sentiam? Scrupulum, inquam, abeunti; Si longus, levis;",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum negas esse divitias, praeposìtum esse dicis? Quis suae urbis conservatorem Codrum, quis Erechthei filias non maxime laudat? Item de contrariis, a quibus ad genera formasque generum venerunt. Sapientem locupletat ipsa natura, cuius divitias Epicurus parabiles esse docuit. Illi enim inter se dissentiunt. At coluit ipse amicitias.",
    "Cur iustitia laudatur? Quid ergo hoc loco intellegit honestum? Erit enim mecum, si tecum erit. Quae quidem vel cum periculo est quaerenda vobis; Hoc est non modo cor non habere, sed ne palatum quidem. Num quid tale Democritus?",
    "Ille vero, si insipiens-quo certe, quoniam tyrannus -, numquam beatus; Id enim volumus, id contendimus, ut officii fructus sit ipsum officium. Atque hoc loco similitudines eas, quibus illi uti solent, dissimillimas proferebas.",
    "Non enim iam stirpis bonum quaeret, sed animalis. Res enim se praeclare habebat, et quidem in utraque parte. Nummus in Croesi divitiis obscuratur, pars est tamen divitiarum. Deinde dolorem quem maximum?",
    "Quid adiuvas? Quae fere omnia appellantur uno ingenii nomine, easque virtutes qui habent, ingeniosi vocantur. Dici enim nihil potest verius. Quod autem satis est, eo quicquid accessit, nimium est; Mihi vero, inquit, placet agi subtilius et, ut ipse dixisti, pressius.",
    "Restinguet citius, si ardentem acceperit. Tenent mordicus. Dulce amarum, leve asperum, prope longe, stare movere, quadratum rotundum. Eiuro, inquit adridens, iniquum, hac quidem de re; Aliter homines, aliter philosophos loqui putas oportere? Aliter enim explicari, quod quaeritur, non potest. Quodsi ipsam honestatem undique pertectam atque absolutam. Cur igitur, cum de re conveniat, non malumus usitate loqui?",
    "Vide, ne etiam menses! nisi forte eum dicis, qui, simul atque arripuit, interficit. Duo Reges: constructio interrete. Fortasse id optimum, sed ubi illud: Plus semper voluptatis? Diodorus, eius auditor, adiungit ad honestatem vacuitatem doloris. Tu autem negas fortem esse quemquam posse, qui dolorem malum putet. Ut alios omittam, hunc appello, quem ille unum secutus est. In qua quid est boni praeter summam voluptatem, et eam sempiternam? Quorum altera prosunt, nocent altera. Summum ením bonum exposuit vacuitatem doloris; Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Dat enim intervalla et relaxat. Odium autem et invidiam facile vitabis. Sed ea mala virtuti magnitudine obruebantur.",
    "Qui autem de summo bono dissentit de tota philosophiae ratione dissentit. Ratio enim nostra consentit, pugnat oratio. Negat esse eam, inquit, propter se expetendam. Tecum optime, deinde etiam cum mediocri amico. Ut id aliis narrare gestiant? Praeterea sublata cognitione et scientia tollitur omnis ratio et vitae degendae et rerum gerendarum. Quod cum dixissent, ille contra. Nam aliquando posse recte fieri dicunt nulla expectata nec quaesita voluptate.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam haec quidem praeposita recte et reiecta dicere licebit. At iam decimum annum in spelunca iacet. Ergo, si semel tristior effectus est, hilara vita amissa est? Duo Reges: constructio interrete. Atque haec coniunctio confusioque virtutum tamen a philosophis ratione quadam distinguitur. Qui non moveatur et offensione turpitudinis et comprobatione honestatis? Ratio enim nostra consentit, pugnat oratio. Ut in geometria, prima si dederis, danda sunt omnia. Nos cum te, M. Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis.",
    "Sed quot homines, tot sententiae; Sed ille, ut dixi, vitiose. Nobis Heracleotes ille Dionysius flagitiose descivisse videtur a Stoicis propter oculorum dolorem. Quod, inquit, quamquam voluptatibus quibusdam est saepe iucundius, tamen expetitur propter voluptatem. Universa enim illorum ratione cum tota vestra confligendum puto.",
    "Sic consequentibus vestris sublatis prima tolluntur. Nam illud vehementer repugnat, eundem beatum esse et multis malis oppressum. Immo videri fortasse. Quod autem satis est, eo quicquid accessit, nimium est; Aut unde est hoc contritum vetustate proverbium: quicum in tenebris? Utinam quidem dicerent alium alio beatiorem! Iam ruinas videres. Beatus autem esse in maximarum rerum timore nemo potest. Haec quo modo conveniant, non sane intellego. Qui ita affectus, beatum esse numquam probabis;",
    "At iam decimum annum in spelunca iacet. Quod autem meum munus dicis non equidem recuso, sed te adiungo socium. Post enim Chrysippum eum non sane est disputatum. Eam tum adesse, cum dolor omnis absit; Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum sit dicere. Ac tamen hic mallet non dolere. Quare attende, quaeso.",
    "Itaque hic ipse iam pridem est reiectus; Honesta oratio, Socratica, Platonis etiam. Tu autem negas fortem esse quemquam posse, qui dolorem malum putet. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Quid enim mihi potest esse optatius quam cum Catone, omnium virtutum auctore, de virtutibus disputare? Illi enim inter se dissentiunt. Ut optime, secundum naturam affectum esse possit.",
    "Fortemne possumus dicere eundem illum Torquatum? Tum ille: Ain tandem? Itaque dicunt nec dubitant: mihi sic usus est, tibi ut opus est facto, fac. Restinguet citius, si ardentem acceperit. Ergo ita: non posse honeste vivi, nisi honeste vivatur? Quid igitur dubitamus in tota eius natura quaerere quid sit effectum? Isto modo, ne si avia quidem eius nata non esset. Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant.",
    "Ut aliquid scire se gaudeant? Num igitur utiliorem tibi hunc Triarium putas esse posse, quam si tua sint Puteolis granaria? Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec. Claudii libidini, qui tum erat summo ne imperio, dederetur. Mihi enim satis est, ipsis non satis. Itaque ab his ordiamur.",
    "In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret. Quem Tiberina descensio festo illo die tanto gaudio affecit, quanto L. Inde igitur, inquit, ordiendum est. Ad eos igitur converte te, quaeso. Et quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis. Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Sed virtutem ipsam inchoavit, nihil amplius. Ita similis erit ei finis boni, atque antea fuerat, neque idem tamen; Quonam modo?",
    "Apparet statim, quae sint officia, quae actiones. Habent enim et bene longam et satis litigiosam disputationem. Tum ille timide vel potius verecunde: Facio, inquit. Ad eas enim res ab Epicuro praecepta dantur. Cupiditates non Epicuri divisione finiebat, sed sua satietate.",
    "Cur haec eadem Democritus? Negat esse eam, inquit, propter se expetendam. Non enim, si omnia non sequebatur, idcirco non erat ortus illinc. Longum est enim ad omnia respondere, quae a te dicta sunt. Quid enim de amicitia statueris utilitatis causa expetenda vides. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? Duo enim genera quae erant, fecit tria. Graecis hoc modicum est: Leonidas, Epaminondas, tres aliqui aut quattuor; Scio enim esse quosdam, qui quavis lingua philosophari possint; Solum praeterea formosum, solum liberum, solum civem, stultost; Dat enim intervalla et relaxat. Quod non faceret, si in voluptate summum bonum poneret. Memini vero, inquam;",
];

import { Module } from '@nestjs/common';
import { Bryanasingletonbarnhart } from './ bryana_singleton-barnhart_quiz.js';
import { AnanatawaQuiz } from './ananatawa_quiz.js';
import { AnotherQuiz } from './another_quiz.js';
import { AnthonyMaysQuiz } from './anthony_mays_quiz.js';
import { ChanelHuttQuiz } from './Chanel_Huttquiz.js';
import { DavidAdenaikeQuiz } from './david_adenaike_quiz.js';
import { DavisDQuiz } from './davisd_quiz.js';
import { DylanLaffertyQuiz } from './dylan_lafferty_quiz.js';
import { EvanPhilakhongQuiz } from './evan_philakhong_quiz.js';
import { EzraQuiz } from './ezra_quiz.js';
import { JasonWatsonQuiz } from './jason_watson_quiz.js';
import { Jbeyquiz } from './jbeyquiz.js';
import { JeremiahWingQuiz } from './jeremiah_wing_quiz.js';
import { KarensQuiz } from './karen_alabi_quiz.js';
import { KhaylaSaundersQuiz } from './khayla_quiz.js';
import { MeikoStephensQuiz } from './meiko_stephens_quiz.js';
import { MercedesMathewsQuiz } from './mercedes_mathews_quiz.js';
import { MontezBradleyQuiz } from './montez_quiz.js';
import { NiaPackquiz } from './nia_quiz.js';
import { OliviaJamesQuiz } from './olivia_james_quiz.js';
import { RasheedMillerQuiz } from './rasheed_miller_quiz.js';
import { JustinsQuiz } from './justin_eklund_quiz.js';
export const Quizzes = Symbol.for('Quizzes');

// Add your quiz provider here.

const QUIZ_PROVIDERS = [
  AnthonyMaysQuiz,
  AnotherQuiz,
  MeikoStephensQuiz,
  MercedesMathewsQuiz,
  Jbeyquiz,
  KarensQuiz,
  MontezBradleyQuiz,
  Bryanasingletonbarnhart,
  EzraQuiz,
  DavidAdenaikeQuiz,
  EvanPhilakhongQuiz,
  KhaylaSaundersQuiz,
  DylanLaffertyQuiz,
  RasheedMillerQuiz,
  JustinsQuiz,
  NiaPackquiz,
  DavisDQuiz,
  AnanatawaQuiz,
  OliviaJamesQuiz,
  ChanelHuttQuiz,
  JeremiahWingQuiz,
  JasonWatsonQuiz,

];

@Module({
  providers: [
    ...QUIZ_PROVIDERS,
    {
      provide: Quizzes,
      useFactory: (...args) => [...args],
      inject: QUIZ_PROVIDERS,
    },
  ],
})
export class QuizzesModule {}

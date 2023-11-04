import {api} from "../axiosWraper";
import {EventItem} from "../events/getEvents";
export type Education = {
    university_id: string;
    university_name: string;
    education_type: string;
    faculty: string;
    department: string;
    speciality: string;
    begin_study_year: string;
    finish_study_year: string;
    dissertation_topic: string;
}

export type  Document = {
    id: string;
    user_id: string;
    type: string;
    name: string;
    path: string;
    created_at: Date;
}

export type  Cours = {
    id: string;
    title: string;
    image: string;
    description: string;
    date_time: Date;
    practice: string;
    wt_link: string;
    created_at: Date;
    users?: any;
    status: string;
}

export type  Initiative = {
    ideas_generation: string;
    independence_in_decision_making: string;
}

export type  OpennessForChanges = {
    operational_adaptability: string;
    speed_of_understanding: string;
    negative_feedback: string;
    tactical_objectivity: string;
    risk_attitude: string;
}

export type  ResultOrientation = {
    results_priority: string;
    responsibility: string;
}

export type  TeamWork = {
    teams_opinion: string;
    make_contacts: string;
    position_with_client: string;
}

export type Communicative = {
    focus_on_flow: string;
    discussion_management: string;
    logic: string;
    argumentation: string;
}

export type  Leadership = {
    attitude_to_conflicts: string;
    emotionality: string;
    team_care: string;
}

export type  PlanningAndOrganize = {
    routine_prioritization: string;
    attention_to_details: string;
    time_management: string;
}

export type  BestForMind = {
    block_1: string;
    block_2: string;
    block_3: string;
    block_4: string;
    block_5: string;
}

export type  BadForMind = {
    block_1: string;
    block_2: string;
    block_3: string;
    block_4: string;
    block_5: string;
}

export type  InterviewQuestions = {
    question_1: string;
    answer_1: string;
    question_2: string;
    answer_2: string;
    question_3: string;
    answer_3: string;
    question_4: string;
    answer_4: string;
    question_5: string;
    answer_5: string;
}

export type Results = {
    test_finished: string;
    initiative: Initiative;
    openness_for_changes: OpennessForChanges;
    result_orientation: ResultOrientation;
    team_work: TeamWork;
    communicative: Communicative;
    strategic_vision: string;
    leadership: Leadership;
    planning_and_organize: PlanningAndOrganize;
    task_management: string;
    performance_improvement: string;
    best_for_mind: BestForMind;
    bad_for_mind: BadForMind;
    interview_questions: InterviewQuestions;
}

export type Test = {
    id: number;
    link: string;
    type: string;
    status: string;
    results: Results;
}

export type  TUser = {
    id: string;
    application_id: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    email: string;
    phone: string;
    birth_date: string;
    city: string;
    created_at: Date;
    education: Education;
    photo: string;
    source: string;
    documents: Document[];
    courses: Cours[];
    events: EventItem[];
    tests: Test[];
}

export type  GetUserDTO = {
    success: boolean;
    data: TUser;
    errors?: any;
}

export const getUser = () => {
    return api.get<GetUserDTO>('/profile')
}
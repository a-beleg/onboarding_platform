import {api} from "../axiosWraper";
export type GetResultsDTO = {
    data: Result[];
    success: boolean;
};

export type Result  ={
    generation_of_ideas:                               Argumentation;
    independence_in_decision_making:                   Argumentation;
    operational_adaptability:                          Argumentation;
    the_speed_of_understanding_an_unfamiliar_task:     Argumentation;
    perception_of_negative_feedback:                   Argumentation;
    tactical_objectivity:                              Argumentation;
    risk_attitude:                                     Argumentation;
    priority_of_result_or_process:                     Argumentation;
    responsibility_fo_decisions:                       Argumentation;
    attitude_to_the_opinion_of_the_team:               Argumentation;
    establishing_contacts:                             Argumentation;
    position_in_the_relationship_with_the_client:      Argumentation;
    focusing_on_the_flow_of_information:               Argumentation;
    discussion_management:                             Argumentation;
    logics:                                            Argumentation;
    argumentation:                                     Argumentation;
    strategic_objectivity:                             Argumentation;
    attitude_towards_conflicts:                        Argumentation;
    emotionality_and_the_transmission_of_emotions:     Argumentation;
    team_care:                                         Argumentation;
    routine_prioritization:                            Argumentation;
    attention_to_detail:                               Argumentation;
    organizing_your_time:                              Argumentation;
    following_the_plan:                                Argumentation;
    reflection:                                        Argumentation;
    the_best_conditions_for_your_thinking_1:           string | null;
    the_best_conditions_for_your_thinking_2:           string | null;
    the_best_conditions_for_your_thinking_3:           string | null;
    the_best_conditions_for_your_thinking_4:           string | null;
    the_best_conditions_for_your_thinking_5:           string | null;
    the_worst_conditions_for_your_thinking_1:          string | null;
    the_worst_conditions_for_your_thinking_2:          string | null;
    the_worst_conditions_for_your_thinking_3:          string | null;
    the_worst_conditions_for_your_thinking_4:          string | null;
    the_worst_conditions_for_your_thinking_5:          string | null;
    what_questions_should_you_ask_in_an_interview_1_1: string | null;
    what_questions_should_you_ask_in_an_interview_1_2: string | null;
    what_questions_should_you_ask_in_an_interview_2_1: string | null;
    what_questions_should_you_ask_in_an_interview_2_2: string | null;
    what_questions_should_you_ask_in_an_interview_3_1: string | null;
    what_questions_should_you_ask_in_an_interview_3_2: string | null;
    what_questions_should_you_ask_in_an_interview_4_1: string | null;
    what_questions_should_you_ask_in_an_interview_4_2: string | null;
    what_questions_should_you_ask_in_an_interview_5_1: string | null;
    what_questions_should_you_ask_in_an_interview_5_2: string | null;
}

export type Argumentation = {
    title:       string;
    description: string;
    mark:        number;
}

export const getResults = async (): Promise<GetResultsDTO> => {

    const response = await api.get<GetResultsDTO>('/results');

    if (response.status === 204) {
        return {
            data: [],
            success: true,
        };
    }

    if (!response.data.success) {
        throw new Error('Failed to fetch results');
    }

    return  response.data as GetResultsDTO;

};
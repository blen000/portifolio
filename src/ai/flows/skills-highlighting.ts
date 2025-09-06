'use server';

/**
 * @fileOverview A skills highlighting AI agent.
 * 
 * - highlightSkills - A function that handles the skills highlighting process.
 * - HighlightSkillsInput - The input type for the highlightSkills function.
 * - HighlightSkillsOutput - The return type for the highlightSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HighlightSkillsInputSchema = z.object({
  professionalSummary: z.string().describe('The professional summary of the person.'),
  technicalSkills: z.string().describe('The technical skills of the person.'),
  workExperience: z.string().describe('The work experience of the person.'),
  projects: z.string().describe('The projects of the person.'),
});
export type HighlightSkillsInput = z.infer<typeof HighlightSkillsInputSchema>;

const HighlightSkillsOutputSchema = z.array(z.object({
  skill: z.string().describe('The skill.'),
  proficiency: z.string().describe('The proficiency level of the skill (e.g., Beginner, Intermediate, Advanced).'),
})).describe('A list of skills with their proficiency levels.');
export type HighlightSkillsOutput = z.infer<typeof HighlightSkillsOutputSchema>;

export async function highlightSkills(input: HighlightSkillsInput): Promise<HighlightSkillsOutput> {
  return highlightSkillsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'highlightSkillsPrompt',
  input: {schema: HighlightSkillsInputSchema},
  output: {schema: HighlightSkillsOutputSchema},
  prompt: `You are an expert career advisor specializing in evaluating technical skills and determining proficiency levels based on professional history.

  Analyze the following information about a person to determine their most impressive technical skills and their corresponding proficiency levels (Beginner, Intermediate, Advanced).

  Professional Summary: {{{professionalSummary}}}
  Technical Skills: {{{technicalSkills}}}
  Work Experience: {{{workExperience}}}
  Projects: {{{projects}}}

  Provide a JSON array of skills with proficiency levels. Only include skills listed under technical skills.

  Example:
  [
    {
      "skill": "JavaScript",
      "proficiency": "Advanced"
    },
    {
      "skill": "SQL",
      "proficiency": "Intermediate"
    }
  ]
`,
});

const highlightSkillsFlow = ai.defineFlow(
  {
    name: 'highlightSkillsFlow',
    inputSchema: HighlightSkillsInputSchema,
    outputSchema: HighlightSkillsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

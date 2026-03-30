/**
 * Spanish Knowledge Base data — reuses English content with same slugs.
 */
import type { KBArticle } from "./knowledgeBaseData";
import { kbArticles } from "./knowledgeBaseData";

export const kbArticlesEs: KBArticle[] = kbArticles.map(article => ({ ...article }));
